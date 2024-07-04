package com.app.service;

import javax.validation.Valid;

import com.app.dto.SigninRequest;
import com.app.entities.Doctor;
import com.app.entities.User;

public interface AuthenticationService {

	User authenticateEmployee(@Valid SigninRequest request);

	Long findByEmail(String userName);

	Doctor authenticateDoctor(@Valid SigninRequest request);

}
