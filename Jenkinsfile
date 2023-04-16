pipeline{
	stages{
		stage(git pull)
		{
			sh 'git pull https://github.com/delta7-138/Gramophone.git'
		}
		stage(build)
		{
			sh 'cd frontend'
			sh 'npm start'
		}
	       }
	}
