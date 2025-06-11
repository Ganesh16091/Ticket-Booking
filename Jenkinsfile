pipeline {
    agent any
    environment {
        IMAGE_NAME = "Ticket-Booking"
        AWS_ACCOUNT_ID = "524501562217"
        AWS_REGION = "us-east-2c"
        ECR_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}"
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Ganesh16091/Ticket-Booking.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $Ticket-Booking.'
                }
            }
        }
    }
        }
    
