import prisma from '@/app/libs/prismadb';

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservations(
    params: IParams
) {
    try {
        const { listingId, userId, authorId } = params;

        const query: any = {};

        if(listingId) {
            query.listingId = listingId;
        }
        if(userId) {
            query.userId = userId;
        }
        if(authorId) {
            query.listing = { userId: authorId };
        }


        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true,
            },
            orderBy: {
                createAt: 'desc'
            }
        });

        const safeReservation = reservations.map((res) => ({
            ...res,
            createAt: res.createAt.toISOString(),
            startDate: res.startDate.toISOString(),
            endDate: res.endDate.toISOString(),
            listing: {
                ...res.listing,
                createdAt: res.listing.createdAt.toISOString(),
            }
        }));



        return safeReservation;
    } catch(error: any) {
        throw new Error(error);
    }
}