import {Component, OnInit} from '@angular/core';
import {Constants} from "../constants/constants";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  fullTextAboutMe : string = 'About Me'
  fullTextDegree : string = 'Data Engineering Student'
  fullTextDesc: string = "I am Aymen Kmaili, a dedicated Data Engineering student with a strong passion for software development and data engineering. I have gained proficiency in modern frameworks such as Angular, Spring Boot, and Flutter, enabling me to create dynamic and responsive applications. My knowledge extends to both relational and NoSQL databases, and I have successfully completed various personal projects across diverse domains, showcasing my ability to tackle different challenges. I am eager to continue learning and applying my skills to contribute to innovative solutions in the tech industry."; // The full text to type out
  displayedTextDesc: string = ''; // Text that will be displayed
  displayedTextDegree: string = ''; // Text that will be displayed
  displayedTextAboutMe: string = ''; // Text that will be displayed

  async ngOnInit() {
    let value: boolean = Constants.isHomeLoadedBefore;
    console.log(value)
    Constants.isHomeLoadedBefore = true;
    console.log("after: ", Constants.isHomeLoadedBefore)
    if (value){
      this.displayedTextAboutMe = this.fullTextAboutMe;
      this.displayedTextDegree = this.fullTextDegree;
      this.displayedTextDesc = this.fullTextDesc
    }else{
      await this.typeText(this.fullTextAboutMe, 'aboutMe', 150);
      await this.typeText(this.fullTextDegree, 'degree', 100);
      await this.typeText(this.fullTextDesc, 'desc', 20);
    }
  }

  async typeText(fullText: string, target: 'aboutMe' | 'desc' | 'degree', timeout: number): Promise<void> {
    let currentIndex = 0;

    return new Promise<void>((resolve) => {
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          if (target === 'aboutMe') {
            this.displayedTextAboutMe = this.displayedTextAboutMe.substring(0,this.displayedTextAboutMe.length-('💻'.length)) + fullText.charAt(currentIndex)+'💻';
          } else if (target === 'degree'){
            this.displayedTextDegree = this.displayedTextDegree.substring(0,this.displayedTextDegree.length-'💻'.length) + fullText.charAt(currentIndex)+'💻';
          }
          else {
            this.displayedTextDesc = this.displayedTextDesc.substring(0,this.displayedTextDesc.length-'💻'.length) + fullText.charAt(currentIndex)+'💻';
          }
          currentIndex++;
        } else {
          clearInterval(typingInterval); // Stop the typing when complete
          target == 'aboutMe' ?this.displayedTextAboutMe = this.displayedTextAboutMe.substring(0,this.displayedTextAboutMe.length-'💻'.length)
          : target == 'desc' ?this.displayedTextDesc = this.displayedTextDesc.substring(0,this.displayedTextDesc.length-'💻'.length)
            :
        this.displayedTextDegree = this.displayedTextDegree.substring(0,this.displayedTextDegree.length-'💻'.length)
          resolve();
        }
      }, timeout); // Adjust the speed of typing (50ms per character)
    });
  }

}
