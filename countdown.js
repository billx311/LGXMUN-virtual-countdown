//take the instant temporal, then convert it to our timezone, then take the ZonedDateTime, then use .until()
//show the output using console.log
const instant = Temporal.Now.instant();
const timezone = instant.toZonedDateTimeISO("Asia/Pakistan");
const mun_day = Temporal.ZonedDateTime.from("2026-07-21T09:00:00[Asia/Pakistan]");
const timer = timezone.until(mun_day);
console.log(timer.toString());
