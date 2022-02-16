package com.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "http://localhost:3000/")
@Controller
@RequestMapping("/post")
public class PostController {
	@Autowired
	PostServices postServices;

	@PostMapping("/sendPost")
	@ResponseBody
	public Post addpost(@RequestBody Post post) {
		return postServices.savePost(post);
	}

	@GetMapping("/getPost/{userName}")
	@ResponseBody
	public List<Post> getdata(@PathVariable String userName) {
		return (List<Post>) postServices.getPost(userName);
	}
	
	@GetMapping("/getAllPost")
	@ResponseBody
	public List<Post> getAllPost() {
		return (List<Post>) postServices.getAllPost();
	}
}
