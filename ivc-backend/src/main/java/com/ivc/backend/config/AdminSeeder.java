package com.ivc.backend.config;

import com.ivc.backend.entity.AdminUser;
import com.ivc.backend.repository.AdminUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminSeeder implements CommandLineRunner {

    private final AdminUserRepository adminUserRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.seed-email}")
    private String seedEmail;

    @Value("${app.admin.seed-password}")
    private String seedPassword;

    @Override
    public void run(String... args) {
        if (seedEmail == null || seedEmail.isBlank() || seedPassword == null || seedPassword.isBlank()) {
            return;
        }
        if (adminUserRepository.existsByEmail(seedEmail)) {
            return;
        }
        AdminUser admin = new AdminUser();
        admin.setEmail(seedEmail);
        admin.setPasswordHash(passwordEncoder.encode(seedPassword));
        admin.setRole("ADMIN");
        adminUserRepository.save(admin);
        System.out.println("✅ Admin user created: " + seedEmail);
    }
}