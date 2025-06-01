package com.qda.user_service.service;

import com.qda.user_service.dto.request.CreateUserprofileRequest;
import com.qda.user_service.dto.request.UpdateUserProfileRequest;
import com.qda.user_service.dto.response.UserProfileResponse;
import com.qda.user_service.entity.UserProfile;
import com.qda.user_service.exceptions.UserProfileNotFound;
import com.qda.user_service.repository.UserProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class UserProfileServiceImplTest {
    @Mock
    private UserProfileRepository repository;

    @InjectMocks
    private UserProfileServiceImpl service;

    private final LocalDateTime now = LocalDateTime.now();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    private UserProfile mockUser(Long id) {
        return UserProfile.builder()
                .userId(id)
                .fullName("Test User")
                .email("test@example.com")
                .role("USER")
                .password("password123")
                .phone("+1234567890")
                .createdAt(now)
                .updatedAt(now)
                .isAccountActive(true)
                .build();
    }

    @Test
    void createProfile_success() {
        CreateUserprofileRequest request = new CreateUserprofileRequest("Test User", "test@example.com", "USER", "password123", "+1234567890");
        UserProfile user = mockUser(1L);

        when(repository.save(any(UserProfile.class))).thenReturn(user);

        UserProfileResponse response = service.createProfile(request);

        assertNotNull(response);
        assertEquals("Test User", response.fullName());
    }

    @Test
    void createProfile_nullRequest_throwsException() {
        assertThrows(NullPointerException.class, () -> service.createProfile(null));
    }

    @Test
    void findUserById_success() {
        UserProfile user = mockUser(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(user));

        UserProfileResponse response = service.findUserById(1L);

        assertEquals("Test User", response.fullName());
    }

    @Test
    void findUserById_nullId_throwsException() {
        assertThrows(UserProfileNotFound.class, () -> service.findUserById(null));
    }

    @Test
    void findUserById_notFound_throwsException() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(UserProfileNotFound.class, () -> service.findUserById(1L));
    }

    @Test
    void findUserByEmail_success() {
        UserProfile user = mockUser(1L);
        when(repository.findUserProfileByEmail("test@example.com")).thenReturn(user);

        UserProfileResponse response = service.findUserByEmail("test@example.com");

        assertEquals("Test User", response.fullName());
    }

    @Test
    void findUserByEmail_nullEmail_throwsException() {
        assertThrows(UserProfileNotFound.class, () -> service.findUserByEmail(null));
    }

    @Test
    void findUserByEmail_blankEmail_throwsException() {
        assertThrows(UserProfileNotFound.class, () -> service.findUserByEmail(" "));
    }

    @Test
    void findUserByEmail_notFound_throwsException() {
        when(repository.findUserProfileByEmail("missing@example.com")).thenReturn(null);

        assertThrows(UserProfileNotFound.class, () -> service.findUserByEmail("missing@example.com"));
    }

    @Test
    void removeUser_success() {
        UserProfile user = mockUser(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(user));

        String message = service.removeUser(1L);

        assertEquals("User deleted successfully", message);
        verify(repository).delete(user);
    }

    @Test
    void removeUser_nullId_throwsException() {
        assertThrows(UserProfileNotFound.class, () -> service.removeUser(null));
    }

    @Test
    void removeUser_notFound_throwsException() {
        when(repository.findById(1L)).thenReturn(Optional.empty());
        assertThrows(UserProfileNotFound.class, () -> service.removeUser(1L));
    }

    @Test
    void deactivateAccount_success() {
        UserProfile user = mockUser(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(user));

        String message = service.deactivateAccount(1L);

        assertEquals("Account was deactivated successfully", message);
        verify(repository).save(user);
        assertFalse(user.isAccountActive());
    }

    @Test
    void deactivateAccount_userNotFound_throwsException() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(UserProfileNotFound.class, () -> service.deactivateAccount(1L));
    }

    @Test
    void activateAccount_success() {
        UserProfile user = mockUser(1L);
        user.setAccountActive(false);

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        String message = service.activateAccount(1L);

        assertEquals("Account was activated successfully", message);
        verify(repository).save(user);
        assertTrue(user.isAccountActive());
    }

    @Test
    void activateAccount_userNotFound_throwsException() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(UserProfileNotFound.class, () -> service.activateAccount(1L));
    }

    @Test
    void updateUserProfile_success() {
        UserProfile user = mockUser(1L);
        UpdateUserProfileRequest request = new UpdateUserProfileRequest("Updated Name", "new@example.com", "ADMIN", "newpass", "+0987654321");

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        String message = service.updateUserProfile(1L, request);

        assertEquals("User profile updated successfully", message);
        verify(repository).save(user);
        assertEquals("Updated Name", user.getFullName());
        assertEquals("new@example.com", user.getEmail());
    }

    @Test
    void updateUserProfile_nullId_throwsException() {
        UpdateUserProfileRequest request = new UpdateUserProfileRequest("Updated", "email", "role", "pass", "phone");
        assertThrows(UserProfileNotFound.class, () -> service.updateUserProfile(null, request));
    }

    @Test
    void updateUserProfile_nullRequest_throwsException() {
        assertThrows(NullPointerException.class, () -> service.updateUserProfile(1L, null));
    }

    @Test
    void updateUserProfile_userNotFound_throwsException() {
        UpdateUserProfileRequest request = new UpdateUserProfileRequest("Updated", "email", "role", "pass", "phone");
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(UserProfileNotFound.class, () -> service.updateUserProfile(1L, request));
    }
}