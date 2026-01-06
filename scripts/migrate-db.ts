/**
 * Importing npm packages
 */
import { drizzle } from 'drizzle-orm/bun-sql';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

/**
 * Declaring the constants
 */
const url = process.env.DB_PRIMARY_URL || 'postgresql://admin:password@localhost/shadow_pulse';
const migrationsFolder = process.env.MIGRATIONS_FOLDER || 'generated/drizzle';

const db = drizzle(url);
await migrate(db, { migrationsFolder });
console.log('Migrations applied successfully'); // eslint-disable-line no-console
