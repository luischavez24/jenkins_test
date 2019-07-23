pipeline {
  agent any
  stages {
    stage('Test app') {
      agent {
        dockerfile {
          filename './test.Dockerfile'
        }

      }
      steps {
        echo 'Test app complete'
      }
    }
    stage('Build image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }

      }
    }
    stage('Deploy Image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }

      }
    }
  }
  environment {
    registry = 'luischavez24/jenkins_test'
    registryCredentials = 'dockerhub'
    dockerImage = ''
  }
}