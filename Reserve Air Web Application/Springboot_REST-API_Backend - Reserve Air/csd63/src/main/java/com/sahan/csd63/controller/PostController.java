package com.sahan.csd63.controller;

import com.sahan.csd63.model.Post;
import com.sahan.csd63.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("posts/v1") //postman --> "GET + localhost:8080/posts/v1" wes hould give to check the API. Process
@RequestMapping("posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public Iterable<Post> getAllPosts(){

        return postService.getAllPosts();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable("id") int id){
        return postService.getPostById(id).get(); // todo: later availability checking
    }

    @PostMapping("/add")
    public int addPost(@RequestBody Post post){

        return postService.addPost(post);
    }


    @PutMapping("/update")
    public int updatePost(@RequestBody Post post){
        return  postService.updatePost(post);

    }

    @DeleteMapping("/{id}")
    public  int deletePostById(@PathVariable("id") int id){

        return postService.deletePost(id);
    }

}







