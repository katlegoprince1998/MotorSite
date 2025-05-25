package com.qda.user_service.dto.response;

import com.qda.user_service.dto.ErrorData;

import java.time.LocalDateTime;

public record UserProfileResponse(
        Long userId, String fullName, String email, String role, String password, String phone, LocalDateTime createdAt,
        LocalDateTime updateAt,  boolean isAccountActive
) {
}
