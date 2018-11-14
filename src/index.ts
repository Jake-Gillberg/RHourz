import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('issues.opened', async (context) => {
    const addComment = `
      mutation comment($id: ID!, $body: String!) {
        addComment(input: {subjectId: $id, body: $body}) {
          clientMutationId
        }
      }
    `
    await context.github.query(addComment, {
      id: context.payload.issue.node_id,
      body: 'Hello World'
    })
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
