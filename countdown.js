//take the instant temporal, then take the ZonedDateTime, then use .until()
//show the output using console.log
const instant = Temporal.Now.Instant();
const mun_day = Temporal.ZonedDateTime.From("2026-7-21T09:00:00[Asia/Pakistan]");
const timer = instant.until(mun_day);
console.log(timer);
