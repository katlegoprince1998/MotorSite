package com.qda.user_service.exceptions;

public class UserProfileNotFound extends RuntimeException {
    public UserProfileNotFound(String message) {
        super(message);
    }
}
