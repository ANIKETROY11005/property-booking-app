import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ReservationsClient from "./ReservationsClient";


const ReservationPage = async () => {
    const currentUser = await getCurrentUser();
    if(!currentUser) {
        return (
            <EmptyState
                title="Unauthorized"
                subtitle="Please Login"
            />
        )
    }
    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if(reservations.length === 0) {
        return (
            <EmptyState
                title="No reservations found!"
                subtitle="Looks like there is no reservations booked in your listings."
            />
        )
    }

    return (
        <ReservationsClient
            reservations={reservations}
            currentUser={currentUser}
        />
    )


}

export default ReservationPage;