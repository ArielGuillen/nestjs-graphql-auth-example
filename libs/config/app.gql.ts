import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver } from '@nestjs/apollo';
import { getAuthCtx } from 'libs/auth/getAuthCtx';

const ApolloSandbox = ApolloServerPluginLandingPageLocalDefault();

interface GQLModule {
  typePaths: string[];
  path: string;
  mocks?: boolean;
}

export const GqlModuleConfig = (props: Partial<GQLModule>) => {
  const GqlConfig = {
    driver: ApolloDriver,
    context: ({ req }) => {
      return {
        ctx: getAuthCtx(req),
      };
    },
    mocks: props.mocks || false,
    typePaths: props.typePaths,
    introspection: true,
    playground: false,
    plugins: [ApolloSandbox],
  };
  return GqlConfig;
};
