import { initUntypeable } from "untypeable";

import type {
  Capsule,
  CapsuleParams,
  Capsules,
} from "./capsules/capsules.types";
import type { Company } from "./company/company.types";
import type { Core, CoreParams, Cores } from "./cores/cores.types";
import type { Crew, CrewMember, CrewMemberParams } from "./crew/crew.types";
import type { Dragon, DragonParams, Dragons } from "./dragons/dragons.types";
import type {
  HistoryEvent,
  HistoryEventParams,
  HistoryEvents,
} from "./history/history.types";
import type {
  LandPad,
  LandPadParams,
  LandPads,
} from "./landpads/landpads.types";
import type {
  LaunchesV4,
  LaunchesV5,
  LaunchParams,
  LaunchV4,
  LaunchV5,
} from "./launches/launches.types";
import type {
  LaunchPad,
  LaunchPadParams,
  LaunchPads,
} from "./launchpads/launchpads.types";
import type {
  Payload,
  PayloadParams,
  Payloads,
} from "./payloads/payloads.types";
import type { Roadster } from "./roadster/roadster.types";
import type { Rocket, RocketParams, Rockets } from "./rockets/rockets.types";
import type { Ship, ShipParams, Ships } from "./ships/ships.types";
import type {
  StarlinkSatellite,
  StarlinkSatelliteParams,
  StarlinkSatellites,
} from "./starlink/starlink.types";

const u = initUntypeable();

const router = u.router({
  "/v4/capsules": u.output<Capsules>(),
  "/v4/capsules/:id": u.input<CapsuleParams>().output<Capsule>(),
  "/v4/company": u.output<Company>(),
  "/v4/cores": u.output<Cores>(),
  "/v4/cores/:id": u.input<CoreParams>().output<Core>(),
  "/v4/crew": u.output<Crew>(),
  "/v4/crew/:id": u.input<CrewMemberParams>().output<CrewMember>(),
  "/v4/dragons": u.output<Dragons>(),
  "/v4/dragons/:id": u.input<DragonParams>().output<Dragon>(),
  "/v4/history": u.output<HistoryEvents>(),
  "/v4/history/:id": u.input<HistoryEventParams>().output<HistoryEvent>(),
  "/v4/landpads": u.output<LandPads>(),
  "/v4/landpads/:id": u.input<LandPadParams>().output<LandPad>(),
  "/v4/launches": u.output<LaunchesV4>(),
  "/v4/launches/latest": u.output<LaunchV4>(),
  "/v4/launches/next": u.output<LaunchV4>(),
  "/v4/launches/past": u.output<LaunchesV4>(),
  "/v4/launches/upcoming": u.output<LaunchesV4>(),
  "/v4/launches/:id": u.input<LaunchParams>().output<LaunchV4>(),
  "/v5/launches": u.output<LaunchesV5>(),
  "/v5/launches/latest": u.output<LaunchV5>(),
  "/v5/launches/next": u.output<LaunchV5>(),
  "/v5/launches/past": u.output<LaunchesV5>(),
  "/v5/launches/upcoming": u.output<LaunchesV5>(),
  "/v5/launches/:id": u.input<LaunchParams>().output<LaunchV5>(),
  "/v4/launchpads": u.output<LaunchPads>(),
  "/v4/launchpads/:id": u.input<LaunchPadParams>().output<LaunchPad>(),
  "/v4/payloads": u.output<Payloads>(),
  "/v4/payloads/:id": u.input<PayloadParams>().output<Payload>(),
  "/v4/roadster": u.output<Roadster>(),
  "/v4/rockets": u.output<Rockets>(),
  "/v4/rockets/:id": u.input<RocketParams>().output<Rocket>(),
  "/v4/ships": u.output<Ships>(),
  "/v4/ships/:id": u.input<ShipParams>().output<Ship>(),
  "/v4/starlink": u.output<StarlinkSatellites>(),
  "/v4/starlink/:id": u
    .input<StarlinkSatelliteParams>()
    .output<StarlinkSatellite>(),
});

export type SpaceXRouter = typeof router;
