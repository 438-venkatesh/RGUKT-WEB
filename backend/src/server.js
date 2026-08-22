const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const path = require('path');

fastify.register(cors, {
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST'],
});

// Health check
fastify.get('/api/health', async () => {
  return { status: 'ok', university: 'RGUKT-AP', timestamp: new Date().toISOString() };
});

// Announcements endpoint
fastify.get('/api/announcements', async () => {
  return {
    data: [
      {
        id: 1,
        type: 'Admissions',
        title: 'RGUKT-AP 2026 Admissions Open',
        date: '2026-08-10',
        content: 'Applications invited for 6-Year B.Tech Program. Last date: September 15, 2026.',
        urgent: true,
      },
      {
        id: 2,
        type: 'Exam',
        title: 'Mid-semester Examinations Schedule',
        date: '2026-08-05',
        content: 'Mid-semester examinations for all years will be held from September 1-10, 2026.',
        urgent: false,
      },
      {
        id: 3,
        type: 'Event',
        title: 'Annual Technical Fest - TECHNOVA 2026',
        date: '2026-07-28',
        content: 'Register now for the annual technical festival to be held on September 20-22, 2026.',
        urgent: false,
      },
    ],
  };
});

// Campus info endpoint
fastify.get('/api/campuses', async () => {
  return {
    data: [
      { id: 1, name: 'IIIT Ongole', location: 'Ongole, Prakasam', students: 5000, established: 2009 },
      { id: 2, name: 'IIIT Srikakulam', location: 'Srikakulam', students: 5000, established: 2009 },
      { id: 3, name: 'IIIT RK Valley', location: 'Kadapa', students: 5200, established: 2009 },
      { id: 4, name: 'IIIT Idupulapaya', location: 'YSR Kadapa', students: 5100, established: 2009 },
    ],
  };
});

// Stats endpoint
fastify.get('/api/stats', async () => {
  return {
    data: {
      totalStudents: 20300,
      totalFaculty: 1247,
      alumniCount: 15800,
      campusCount: 4,
      placementRate: 87,
      researchPapers: 3200,
    },
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
    console.log('RGUKT-AP Backend running on http://localhost:3001');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
