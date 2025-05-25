package com.qda.user_service.dto.request;

public record UpdateUserProfileRequest(
        String fullName, String email, String role, String password, String phone
) {
}
