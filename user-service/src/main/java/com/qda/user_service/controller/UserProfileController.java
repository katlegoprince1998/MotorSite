package com.qda.user_service.controller;

import com.qda.user_service.dto.request.CreateUserprofileRequest;
import com.qda.user_service.dto.request.UpdateUserProfileRequest;
import com.qda.user_service.dto.response.UserProfileResponse;
import com.qda.user_service.service.UserProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserProfileController {

    private final UserProfileService userProfileService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserProfileResponse createUserProfile(@Valid @RequestBody CreateUserprofileRequest request) throws Exception {
        return userProfileService.createProfile(request);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserProfileResponse> getUserById(@PathVariable Long userId) throws Exception {
        UserProfileResponse response = userProfileService.findUserById(userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/email")
    public ResponseEntity<UserProfileResponse> getUserByEmail(@RequestParam String email) {
        UserProfileResponse response = userProfileService.findUserByEmail(email);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        String result = userProfileService.removeUser(userId);
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/{userId}/deactivate")
    public ResponseEntity<String> deactivateAccount(@PathVariable Long userId) {
        String result = userProfileService.deactivateAccount(userId);
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/{userId}/activate")
    public ResponseEntity<String> activateAccount(@PathVariable Long userId) {
        String result = userProfileService.activateAccount(userId);
        return ResponseEntity.ok(result);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<String> updateUserProfile(
            @PathVariable Long userId,
            @Valid @RequestBody UpdateUserProfileRequest request) {
        String result = userProfileService.updateUserProfile(userId, request);
        return ResponseEntity.ok(result);
    }
}
