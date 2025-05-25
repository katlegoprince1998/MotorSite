package com.qda.user_service.service;

import com.qda.user_service.dto.request.CreateUserprofileRequest;
import com.qda.user_service.dto.request.UpdateUserProfileRequest;
import com.qda.user_service.dto.response.UserProfileResponse;
import com.qda.user_service.exceptions.UserProfileNotFound;



public interface UserProfileService {
    UserProfileResponse createProfile(CreateUserprofileRequest request) throws Exception;
    UserProfileResponse findUserById(Long userId) throws Exception;
    UserProfileResponse findUserByEmail(String email) throws UserProfileNotFound;
    String removeUser(Long userId) throws  UserProfileNotFound;
    String deactivateAccount(Long userId) throws UserProfileNotFound;
    String activateAccount(Long userId) throws UserProfileNotFound;
    String updateUserProfile(Long userId, UpdateUserProfileRequest request);
}
