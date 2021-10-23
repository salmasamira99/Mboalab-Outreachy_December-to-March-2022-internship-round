# How to contribute to the project?

As part of the application process, all applicants must make at least one contribution to be accepted as an intern for this project.

 **_Only applicants who contribute will be eligible to be accepted as interns._**
 
 
We are looking for motivated interns who can work in an inclusive and multidisciplinary environment, to contribute to setting up a local and robust dataset subdivided into two main subsets: the first consisting of images and the second of structured data. The dataset should be open, interoperable and aligned with the Metadata Schema 4.4 https://schema.datacite.org/.

Applicants can contribute to this project through the [project repository](https://github.com/Mboalab/Mboalab-Outreachy_December-to-March-2022-internship-round) on GitHub. 

## Selecting a Task

Lists of newcomer-friendly and advanced tasks can be found in the [Starter Tasks](https://github.com/Mboalab/Mboalab-Outreachy_December-to-March-2022-internship-round/tree/main/Starter%20Tasks) folder in the project repository. 
Applicants are encouraged to select a task based on personal interest, background and skills.

_**Both individual or collective contributions to a particular task are welcomed.**_

## Sending Contributions 
**NOTE**: If you have already sent your Pull Requests with earlier version of the project, please make sure to start from the **Migration** section.

1. Fork the project to your GitHub account and clone it into your development environment
2. Make sure to move to an **outreachy-2022** branch before making changes in your working directory
3. All contributions have to be listed in **Outreachy-2022** folder.

    3.1 Create a folder with a naming convention **[Applicant Name]** (e.g **John Smith**) in **Outreachy-2022**
    
    3.2 List all your contributions in your **[Applicant Name]** folder in respective files *Task0.md*, *Task1.md*, and etc.
    
    The end result should resemble this:
    
        - Outreachy-2022
            - [Applicant Name]
                - Task0.md
                  Task1.md
                  ...
        
4. Create a Pull Request and send updates *to* the **outreachy-2022** branch.

**IMPORTANT**

Familiarize yourself with the following Best Practices:

- [Writing Meaningful Commit Messages](https://reflectoring.io/meaningful-commit-messages/)
- [Writing A Great Pull Request Description](https://www.pullrequest.com/blog/writing-a-great-pull-request-description/)


## Migration
**NOTE**: Skip this section if you have not *Pull Requests* with earlier version of the project

- Sync your forked repository with the original repository and push the changes to your GitHub repository.

```
$ git checkout main
$ git remote add upstream https://github.com/[Original Owner Username]/[Original Repository].git
$ git fetch upstream
$ git merge upstream/main
$ git add .
$ git commit -m "[message]"
$ git push origin main
```

- Create and checkout to a new branch **outreachy-2022**
Follow **Sending Contributions** section starting from *Step 3*


- Once you have integrated your working directory with *Step 3*, remove all files you have added in 

        - Newcomer Tasks
            - Task x: [Task description]
                - Applicants Contributions

- Push your changes and send in a PR the bundle of your work integrated with requirements listed in **Sending Contributions**

Please get in touch with a mentor to guide you through the process in case of any difficulty.


## Nature of Contributions
The nature of contributions varies greatly according to the selected task. In order to ensure a tailored, inclusive and open contribution process, applicants are encouraged to use the guidelines provided in each task description to propose the best format for their contributions. 

Participants are therefore welcome and should feel free to propose, innovate and adjust their contributions according to their own understanding. Mentors will always be there to guide and frame received ideas.
