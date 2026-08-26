import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  PlaybookEntry: a
    .model({
      title: a.string().required(),
      prompt: a.string().required(),
      output: a.string(),
      tool: a.enum(['CLAUDE', 'CHATGPT', 'GROK', 'GEMINI', 'CURSOR', 'OTHER']),
      status: a.enum(['IN_PROGRESS', 'TESTED', 'PROVEN']),
      tags: a.string().array(),
      modelVersion: a.string(),
      context: a.string(),
      provenanceHash: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
