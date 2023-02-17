import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver } from '@nestjs/apollo';

const ApolloSandbox = ApolloServerPluginLandingPageLocalDefault();

interface GQLModule {
  typePaths: string[];
  path: string;
  mocks?: boolean;
}

export const GqlModuleConfig = (props: Partial<GQLModule>) => {
  const GqlConfig = {
    driver: ApolloDriver,
    mocks: props.mocks || false,
    typePaths: props.typePaths,
    introspection: true,
    playground: false,
    plugins: [ApolloSandbox],
  };
  return GqlConfig;
};
