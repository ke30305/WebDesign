def notifySlack(String status) {
    def color     = status == 'success' ? '#17b003' : '#cc0000'
    def label     = status == 'success' ? '程式更新' : 'Deploy 失敗'
    def hostname  = sh(script: 'basename $(git rev-parse --show-toplevel)', returnStdout: true).trim()
    def commitHash = sh(script: 'git log -1 --pretty=format:"%h"', returnStdout: true).trim()
    def commitLog  = sh(script: 'git log -1 --pretty=format:"`%h` - %s - %an"', returnStdout: true).trim()
    def date       = sh(script: 'date +%Y-%m-%d', returnStdout: true).trim()
    def branch     = (env.BRANCH_NAME ?: env.GIT_BRANCH ?: 'unknown').replaceFirst('origin/', '')
    def pretext    = "Git Branch `${branch}`, Build <${env.BUILD_URL}|#${env.BUILD_NUMBER}>, 程式路徑: `${env.APP_DIR}`"

    def payload = groovy.json.JsonOutput.toJson([
        username   : 'Jenkins-Notify',
        icon_emoji : ':robot_face:',
        text       : "*[${hostname}]* - *${label}* - ${date} (${commitHash})",
        attachments: [[
            color     : color,
            pretext   : pretext,
            text      : commitLog,
            mrkdwn_in : ['text', 'pretext'],
        ]],
    ])

    writeFile file: '/tmp/slack_payload.json', text: payload
    sh "curl -s -X POST -H 'Content-type: application/json' -d @/tmp/slack_payload.json ${env.SLACK_WEBHOOK}"
}

pipeline {
    agent any

    environment {
        WEB_HOST      = 'leo@10.0.0.20'
        APP_DIR       = '/var/www/webdesign'
        SLACK_WEBHOOK = credentials('slack-webhook')
    }

    stages {
        stage('Deploy') {
            steps {
                sh """
                    ssh ${WEB_HOST} '
                        set -e
                        cd ${APP_DIR}

                        echo "==> git pull"
                        git pull origin master
                    '
                """
            }
        }
    }

    post {
        success { script { notifySlack('success') } }
        failure { script { notifySlack('failure') } }
    }
}
