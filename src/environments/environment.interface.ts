export interface EnvironmentConfig {
  production: boolean;
  emailjsconfig: {
    publicKey: string;
    serviceId: string;
    templateId: string;
    emailAddress?: string;
  };
}