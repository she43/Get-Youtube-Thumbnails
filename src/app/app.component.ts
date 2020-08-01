import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube Thumbnails URL';
  videoURL : string;
  listOfThumbnails : Array<String> = [];

  AppComponent(){
    this.videoURL = document.getElementById("videoURL").textContent;
  }

  getThumbnailUrls(){
    this.listOfThumbnails = [];
    let isValid : boolean = this.validateYoutubeURL(this.videoURL)
      if(!isValid)
         window.alert("Invalid Youtube URL");
      else
        { var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
          var match = this.videoURL.match(regExp);
          console.log(match)
          this.listOfThumbnails[0]=("http://img.youtube.com/vi/"+match[2]+"/hqdefault.jpg");
          this.listOfThumbnails[1]=("http://img.youtube.com/vi/"+match[2]+"/0.jpg");
          this.listOfThumbnails[2]=("http://img.youtube.com/vi/"+match[2]+"/hq1.jpg");
          this.listOfThumbnails[3]=("http://img.youtube.com/vi/"+match[2]+"/hq2.jpg");
          this.listOfThumbnails[4]=("http://img.youtube.com/vi/"+match[2]+"/hq3.jpg");
        }
  }

  validateYoutubeURL(url:string) : boolean{
        if (url != undefined || url != '') { 
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
               return true;
            }
            else {
               return false;
            }
        }
        else 
        {
          return false;
        }
  }
}
