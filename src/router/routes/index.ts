import type { RouteRecordRaw } from 'vue-router'
import { homeRoutes } from './home.routes'
import { mythicalRoutes } from './mythical.routes'
import { errorRoutes } from './error.routes'

export const routes: RouteRecordRaw[] = [...homeRoutes, ...mythicalRoutes, ...errorRoutes]
