package com.example.authentication.application.services;

import com.example.authentication.api.dto.UserDTO;
import com.example.authentication.domain.models.User;
import com.example.authentication.infraestructure.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public ResponseEntity<Object> getUsers(){
        return ResponseEntity.ok(userRepository.findAll());
    }

    public ResponseEntity<Object> createUser(@RequestBody UserDTO userDTO){
        User user = new User();
        if (userRepository.existsByEmail(userDTO.getEmail())){
            return ResponseEntity.badRequest().body("the user is already exist" + userDTO.getEmail());
        }
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        var saved = userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
