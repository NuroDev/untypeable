import { initUntypeable } from "untypeable";

import {
  CapsuleSchema,
  CapsuleParamsSchema,
  CapsulesSchema,
} from "./capsules/capsules.validators";
import { CompanySchema } from "./company/company.validators";
import {
  CoreSchema,
  CoreParamsSchema,
  CoresSchema,
} from "./cores/cores.validators";
import {
  CrewSchema,
  CrewMemberSchema,
  CrewMemberParamsSchema,
} from "./crew/crew.validators";
import {
  DragonSchema,
  DragonParamsSchema,
  DragonsSchema,
} from "./dragons/dragons.validators";
import {
  HistoryEventSchema,
  HistoryEventParamsSchema,
  HistoryEventsSchema,
} from "./history/history.validators";
import {
  LandPadSchema,
  LandPadParamsSchema,
  LandPadsSchema,
} from "./landpads/landpads.validators";
import {
  LaunchesV4Schema,
  LaunchesV5Schema,
  LaunchParamsSchema,
  LaunchV4Schema,
  LaunchV5Schema,
} from "./launches/launches.validators";
import {
  LaunchPadSchema,
  LaunchPadParamsSchema,
  LaunchPadsSchema,
} from "./launchpads/launchpads.validators";
import {
  PayloadSchema,
  PayloadParamsSchema,
  PayloadsSchema,
} from "./payloads/payloads.validators";
import { RoadsterSchema } from "./roadster/roadster.validators";
import {
  RocketSchema,
  RocketParamsSchema,
  RocketsSchema,
} from "./rockets/rockets.validators";
import {
  ShipSchema,
  ShipParamsSchema,
  ShipsSchema,
} from "./ships/ships.validators";
import {
  StarlinkSatelliteSchema,
  StarlinkSatelliteParamsSchema,
  StarlinkSatellitesSchema,
} from "./starlink/starlink.validators";

const u = initUntypeable();

export const spaceXSafeRouter = u.router({
  "/v4/capsules": u.output(CapsulesSchema),
  "/v4/capsules/:id": u.input(CapsuleParamsSchema).output(CapsuleSchema),
  "/v4/company": u.output(CompanySchema),
  "/v4/cores": u.output(CoresSchema),
  "/v4/cores/:id": u.input(CoreParamsSchema).output(CoreSchema),
  "/v4/crew": u.output(CrewSchema),
  "/v4/crew/:id": u.input(CrewMemberParamsSchema).output(CrewMemberSchema),
  "/v4/dragons": u.output(DragonsSchema),
  "/v4/dragons/:id": u.input(DragonParamsSchema).output(DragonSchema),
  "/v4/history": u.output(HistoryEventsSchema),
  "/v4/history/:id": u
    .input(HistoryEventParamsSchema)
    .output(HistoryEventSchema),
  "/v4/landpads": u.output(LandPadsSchema),
  "/v4/landpads/:id": u.input(LandPadParamsSchema).output(LandPadSchema),
  "/v4/launches": u.output(LaunchesV4Schema),
  "/v4/launches/latest": u.output(LaunchV4Schema),
  "/v4/launches/next": u.output(LaunchV4Schema),
  "/v4/launches/past": u.output(LaunchesV4Schema),
  "/v4/launches/upcoming": u.output(LaunchesV4Schema),
  "/v4/launches/:id": u.input(LaunchParamsSchema).output(LaunchV4Schema),
  "/v5/launches": u.output(LaunchesV5Schema),
  "/v5/launches/latest": u.output(LaunchV5Schema),
  "/v5/launches/next": u.output(LaunchV5Schema),
  "/v5/launches/past": u.output(LaunchesV5Schema),
  "/v5/launches/upcoming": u.output(LaunchesV5Schema),
  "/v5/launches/:id": u.input(LaunchParamsSchema).output(LaunchV5Schema),
  "/v4/launchpads": u.output(LaunchPadsSchema),
  "/v4/launchpads/:id": u.input(LaunchPadParamsSchema).output(LaunchPadSchema),
  "/v4/payloads": u.output(PayloadsSchema),
  "/v4/payloads/:id": u.input(PayloadParamsSchema).output(PayloadSchema),
  "/v4/roadster": u.output(RoadsterSchema),
  "/v4/rockets": u.output(RocketsSchema),
  "/v4/rockets/:id": u.input(RocketParamsSchema).output(RocketSchema),
  "/v4/ships": u.output(ShipsSchema),
  "/v4/ships/:id": u.input(ShipParamsSchema).output(ShipSchema),
  "/v4/starlink": u.output(StarlinkSatellitesSchema),
  "/v4/starlink/:id": u
    .input(StarlinkSatelliteParamsSchema)
    .output(StarlinkSatelliteSchema),
});
