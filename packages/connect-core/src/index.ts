// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export { createCallbackClient, CallbackClient } from "./callback-client.js";
export { createPromiseClient, PromiseClient } from "./promise-client.js";
export type { CallOptions } from "./call-options.js";
export type { Transport } from "./transport.js";
export {
  ConnectError,
  connectErrorDetails,
  connectErrorFromReason,
} from "./connect-error.js";
export { Code } from "./code.js";
export {
  Interceptor,
  UnaryRequest,
  UnaryResponse,
  StreamingRequest,
  StreamingConn,
} from "./interceptor.js";
export {
  encodeBinaryHeader,
  decodeBinaryHeader,
  appendHeaders,
} from "./http-headers.js";

// Symbols above should be relevant to end users.
// Symbols below should only be relevant for other libraries.
export { runUnary, runStreaming } from "./interceptor.js";
export { makeAnyClient, AnyClient } from "./any-client.js";
export { codeToString, codeFromString } from "./code.js";
export { createMethodUrl } from "./create-method-url.js";
export { createClientMethodSerializers } from "./create-client-method-serializers.js";
export {
  createEnvelopeReadableStream,
  EnvelopedMessage,
  encodeEnvelope,
  encodeEnvelopes,
} from "./envelope.js";
export { connectErrorFromJson } from "./connect-error-from-json.js";
export { connectExpectContentType } from "./connect-expect-content-type.js";
export { connectCreateRequestHeader } from "./connect-create-request-header.js";
export {
  connectEndStreamFromJson,
  connectEndStreamFlag,
} from "./connect-end-stream.js";
export { connectCodeFromHttpStatus } from "./connect-code-from-http-status.js";
export { connectTrailerDemux } from "./connect-trailer-demux.js";
export { grpcWebCodeFromHttpStatus } from "./grpcweb-code-from-http-status.js";
export { grpcWebCreateRequestHeader } from "./grpc-web-create-request-header.js";
export { grpcWebExpectContentType } from "./grpc-web-expect-content-type.js";
export { Status as GrpcStatus } from "./gen/grpc/status/status_pb.js";
