package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.SigninRequest;
import com.app.entities.Doctor;
import com.app.entities.User;
import com.app.jwt_utils.JwtUtils;
import com.app.service.AuthenticationService;
import com.app.service.DoctorService;


@RestController
@RequestMapping("/authenticate")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class AuthenticationController {

	@Autowired
	private AuthenticationService authServ;
	
	
	@Autowired
	private DoctorService docService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtils utils;
	
	


//	@PostMapping("/signin")
//	public User authenticateEmp(@RequestBody @Valid SigninRequest request) {
//		System.out.println("in auth emp " + request);
//		return authServ.authenticateEmployee(request);
//
//	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody  AuthRequest request){
		System.out.println("in sign in " + request);

		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		
		try {
			// authenticate the credentials
			Authentication authenticatedDetails = authenticationManager.authenticate(authToken);
		//	log.info("auth token again " + authenticatedDetails);
			// => auth succcess
			String jwtToken = utils.generateJwtToken(authenticatedDetails);
			String userName = utils.getUserNameFromJwtToken(jwtToken);
			String UserRoles = utils.getUserRoleFromJwtToken(jwtToken);
			String isLoggedIn = "true";
			
			//Long id = authServ.findUserId(userName);
			Long id = authServ.findByEmail(userName);
			
			return ResponseEntity.ok(new AuthResp("Authorization successful!", jwtToken, UserRoles, id, isLoggedIn));
		} catch (BadCredentialsException e) { // lab work : replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err "+e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}
	
	
	
	@PostMapping("/doctor/login")
	public Doctor authenticateDoc(@RequestBody @Valid SigninRequest request) {
		System.out.println("in auth doc " + request);
		return docService.authenticateDoctor(request);

	}
	
	
	
	
	
	
	
	
	

}
