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
        sh 'npm run test'
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
  tools {
    nodejs 'node'
  }
  environment {
    registry = 'luischavez24/jenkins_test'
    registryCredentials = 'dockerhub'
    dockerImage = ''
  }
}