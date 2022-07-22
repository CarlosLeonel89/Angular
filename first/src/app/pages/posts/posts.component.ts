import {
    Component, OnInit
}
from '@angular/core';
import {
    Post, PostResult
}
from 'src/app/interfaces/post';
import {
    UsersService
}
from 'src/app/services/users.service';

@Component({ selector: 'app-posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.css'] }) export class PostComponent implements OnInit {
    posts: Post[] = [];

    constructor(private service: UsersService) {
        this.givemePosts();
    }

    ngOnInit():void {}

    givemePosts():void {
        this.service.getPosts().subscribe((result: PostResult) => { console.log(result.data); this.posts = result.data; })
    }

}
