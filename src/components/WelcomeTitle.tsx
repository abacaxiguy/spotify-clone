export function WelcomeTitle() {
    const welcomeByTime = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening";

    return <h1 className="font-semibold text-3xl mt-10">Good {welcomeByTime}</h1>;
}
