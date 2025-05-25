package com.qda.user_service.repository;

import com.qda.user_service.dto.response.UserProfileResponse;
import com.qda.user_service.entity.UserProfile;
import com.qda.user_service.exceptions.UserProfileNotFound;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    UserProfile findUserProfileByEmail(String email) throws UserProfileNotFound;
}
