package com.sahan.csd63.service;

import com.sahan.csd63.dao.PostRepository;
import com.sahan.csd63.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Iterable<Post> getAllPosts() {

        return postRepository.findAll();
    }


    // "Optional" Keyname we used for java 8 or later in order to avoid the null point exception in the code.
    public Optional<Post> getPostById(int id) {
        return postRepository.findById(id);

    }

    public int addPost(Post post) {
        if (post != null) {
            postRepository.save(post);

            return 1;  //if data adding is successful then "1" will be the console output in postman
        } else {
            return -1;
        }
    }

    public int updatePost(Post upd_post){
//        pls do proper validation

//        this is another pattern to update the data in the database by using an existing id or existing data record//
        if(upd_post != null){
//            Post post = postRepository.findById()
            if(postRepository.findById(upd_post.getId()).isPresent()){
                postRepository.save(upd_post);
                return 1;
                // there is  an existing data raw in DB table and data was updated.
            }

        }else {
            return 0;
            // there is an existing data raw in DB table and data was not updated.
        }
            return  -1;
        // there is  no existing data raw in DB table.
    }

    public int deletePost(int id) {

//        if(id>0){
//            postRepository.deleteById(id);
//            return 1;
//        }else {
//            return -1;
//        }

//   this is another pattern to delete the data in the database by using an existing id or existing data record//
        if(postRepository.findById(id).isPresent()){
            postRepository.deleteById(id);
            return 1;
        }
        return -1;
    }


}


