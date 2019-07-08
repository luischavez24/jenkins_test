pipeline {
  tools {nodejs "node"}
  environment {
    registry = 'luischavez24/jenkins_test'
    registryCredentials = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'npm version'
        sh 'npm install'
      }
    }
    stage('Test app') {
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
}
