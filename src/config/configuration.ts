const configuration = () => ({
  port: parseInt(process.env.PORT!, 10) || 5432,
  databaseUrl: process.env.DATABASE_URL,
});

export type ConfigurationType = ReturnType<typeof configuration>;

export default configuration;
