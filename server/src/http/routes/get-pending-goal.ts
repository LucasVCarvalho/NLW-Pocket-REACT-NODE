import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'

export const getPedingGoalRoute: FastifyPluginAsyncZod = async function (app) {
    app.get('/pending-goals', async () => {
        const {pendingGoals} = await getWeekPendingGoals()
    
        return {pendingGoals}
    })
    
} 