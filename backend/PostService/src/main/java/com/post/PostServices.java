package com.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("PostServices")
public class PostServices {
	@Autowired
	PostRepository postRepository;

	public Post savePost(Post post) {
		postRepository.save(post);		
		return post;
	}
	public List<Post> getPost(String userName){
		return postRepository.findByuserName(userName);	
	}
	
	public List<Post> getAllPost(){
		return postRepository.findAll();
	}
}
