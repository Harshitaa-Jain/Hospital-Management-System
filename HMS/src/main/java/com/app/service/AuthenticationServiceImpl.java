package com.app.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DoctorDao;
import com.app.dao.UserDao;
import com.app.dto.SigninRequest;
import com.app.entities.Doctor;
import com.app.entities.User;

@Service
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {

	
	@Autowired
	private UserDao userDao;

	
	@Autowired
	private DoctorDao docDao;
	
	@Override
	public User authenticateEmployee(@Valid SigninRequest request) {
		return userDao.findByEmailAndPassword(request.getEmail(), request.getPassword()).orElseThrow();
	}

	@Override
	public Long findByEmail(String userName) {
		User u =userDao.findByEmail(userName).orElseThrow();
		return u.getId();
	}
	
	@Override
	public Doctor authenticateDoctor(@Valid SigninRequest request) {
	
		return docDao.findByEmailAndPassword(request.getEmail(), request.getPassword()).orElseThrow();
	}
	

	
}
