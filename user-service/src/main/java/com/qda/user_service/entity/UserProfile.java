package com.qda.user_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private String fullName;
    private String email;
    private String phone;
    private String role;
    private String password;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isAccountActive;
}
