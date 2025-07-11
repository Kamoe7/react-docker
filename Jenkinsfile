 pipeline {
  agent any

  tools {
    nodejs '22.16.0'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch:'main', url : 'https://github.com/Kamoe7/react-docker'
      }
    }

    stage('Install') {
      steps {
         
          sh 'npm install'
        
      }
    }

    stage('Test'){
      steps{
       
            sh 'npm test ' // also can do npx vitest run
        
    }
  }

    stage('Build') {
      steps {
       
          sh 'npm run build'
        
      }
    }   
    
    stage('Build Docker Image'){
        steps{
            sh 'docker build -t react-docker:latest .'
        }
    }


    stage('Run Docker Container'){
        steps{
            sh 'docker stop react-docker || true'
            sh 'docker rm react-docker || true'
            sh 'docker run -d --name react-docker -p 5173:80 react-docker:latest'
        }
    }

    stage('Archive Build'){
      steps{
        archiveArtifacts artifacts: 'build/**', fingerprint: true , allowEmptyArchive:true //so later i can download the github code from the jenkins 
      }
    }
  }


  post{
    success{
      echo 'React app build and deployment successful!'
        
    }
    failure{
        echo 'Build failed. Checked logs'
    }
  }
}
