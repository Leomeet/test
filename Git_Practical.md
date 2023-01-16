
## 1.  Pull request and merge request

- to create a pull request go to your github -> repository -> Pull requests -> new pull request
  select the branch that you want to merge in the master hit Create Pull Request

git merge
- git checkout master
- git mege feature
- git branch -d feature

## 2. Rebase
assuming that you want to rebase a feature branch to a master branch
- git checkout feature
- git rebase master
- git checkout master
- git rebase feature
this will get the head of master branch at the top of rebased feature commit
- git branch -d feature

## 3. Change commit message
- git commit --amend
&
- git rebase -i [hash of commit] 

## 4. Cherry Pick
- git checkout main
- git cherry-pick [hash of commit]

## 5. Drop commit
- git reset --soft [commit hash]
- git reset --hard [commit hash]