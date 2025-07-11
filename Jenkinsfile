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
        dir('my-react-app') {
          sh 'npm install'
        }
      }
    }

    stage('Test'){
      steps{
        dir('my-react-app'){
            sh 'npm test -- --watchAll=false'
        }
    }
  }

    stage('Build') {
      steps {
        dir('my-react-app') {
          sh 'npm run build'
        }
      }
    }   
    
    stage('Build Docker Image'){
        steps{
            sh 'docker build -t react-docker:lst'
        }
    }


    stage('Run Docker Container'){
        steps{
            sh 'docker stop react-docker || true'
            sh 'docker rm react-docker || true'
            sh 'docker run -d --name react-docker -p 8080:80 react-docker:lst'
        }
    }
  }


  post{
    success{
        archiveArtifacts artifacts: 'build/**', fingerprint: true , allowEmptyArchive=true //so later i can download the github code from the jenkins 
    }
    failure{
        echo 'Build failed. Checked logs'
    }
  }
}
