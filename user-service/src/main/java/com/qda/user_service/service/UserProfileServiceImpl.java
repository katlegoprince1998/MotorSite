package com.qda.user_service.service;

import com.qda.user_service.dto.request.CreateUserprofileRequest;
import com.qda.user_service.dto.request.UpdateUserProfileRequest;
import com.qda.user_service.dto.response.UserProfileResponse;
import com.qda.user_service.entity.UserProfile;
import com.qda.user_service.exceptions.UserProfileNotFound;
import com.qda.user_service.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UserProfileServiceImpl implements UserProfileService {

    private final UserProfileRepository repository;

    @Override
    public UserProfileResponse createProfile(CreateUserprofileRequest request) {
        Objects.requireNonNull(request, "Request body cannot be null");

        UserProfile user = UserProfile.builder()
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .role(request.role())
                .phone(request.phone())
                .isAccountActive(true)
                .email(request.email())
                .fullName(request.fullName())
                .password(request.password())
                .build();

        UserProfile savedUser = repository.save(user);
        return mapToResponse(savedUser);
    }

    @Override
    public UserProfileResponse findUserById(Long userId) {
        validateUserId(userId);

        UserProfile user = repository.findById(userId)
                .orElseThrow(() -> new UserProfileNotFound("User not found with ID: " + userId));

        return mapToResponse(user);
    }

    @Override
    public UserProfileResponse findUserByEmail(String email) {
        if (email == null || email.isBlank()) {
            throw new UserProfileNotFound("User email address is required");
        }

        UserProfile user = repository.findUserProfileByEmail(email);
        if (user == null) {
            throw new UserProfileNotFound("User not found with email: " + email);
        }

        return mapToResponse(user);
    }

    @Override
    public String removeUser(Long userId) {
        validateUserId(userId);

        UserProfile user = repository.findById(userId)
                .orElseThrow(() -> new UserProfileNotFound("User not found with ID: " + userId));

        repository.delete(user);
        return "User deleted successfully";
    }

    @Override
    public String deactivateAccount(Long userId) {
        validateUserId(userId);

        UserProfile user = repository.findById(userId)
                .orElseThrow(() -> new UserProfileNotFound("User not found with ID: " + userId));

        user.setAccountActive(false);
        user.setUpdatedAt(LocalDateTime.now());
        repository.save(user);

        return "Account was deactivated successfully";
    }

    @Override
    public String activateAccount(Long userId) {
        validateUserId(userId);

        UserProfile user = repository.findById(userId)
                .orElseThrow(() -> new UserProfileNotFound("User not found with ID: " + userId));

        user.setAccountActive(true);
        user.setUpdatedAt(LocalDateTime.now());
        repository.save(user);

        return "Account was activated successfully";
    }

    @Override
    public String updateUserProfile(Long userId, UpdateUserProfileRequest request) {
        validateUserId(userId);
        Objects.requireNonNull(request, "Update request body cannot be null");

        UserProfile user = repository.findById(userId)
                .orElseThrow(() -> new UserProfileNotFound("User not found with ID: " + userId));

        if (request.fullName() != null) user.setFullName(request.fullName());
        if (request.email() != null) user.setEmail(request.email());
        if (request.role() != null) user.setRole(request.role());
        if (request.password() != null) user.setPassword(request.password());
        if (request.phone() != null) user.setPhone(request.phone());
        user.setUpdatedAt(LocalDateTime.now());

        repository.save(user);

        return "User profile updated successfully";
    }

    private void validateUserId(Long userId) {
        if (userId == null) {
            throw new UserProfileNotFound("User ID cannot be null");
        }
    }

    private UserProfileResponse mapToResponse(UserProfile user) {
        return new UserProfileResponse(
                user.getUserId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole(),
                user.getPassword(),
                user.getPhone(),
                user.getCreatedAt(),
                user.getUpdatedAt(),
                user.isAccountActive()
        );
    }
}
