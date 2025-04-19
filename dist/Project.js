"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputFormat = exports.ProjectStatus = void 0;
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["DRAFT"] = "draft";
    ProjectStatus["OPEN"] = "open";
    ProjectStatus["IN_PROGRESS"] = "in_progress";
    ProjectStatus["PENDING_VALIDATION"] = "pending_validation";
    ProjectStatus["COMPLETED"] = "completed";
    ProjectStatus["CANCELLED"] = "cancelled";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var OutputFormat;
(function (OutputFormat) {
    OutputFormat["TEXT"] = "text";
    OutputFormat["IMAGE"] = "image";
    OutputFormat["CODE"] = "code";
    OutputFormat["AUDIO"] = "audio";
    OutputFormat["VIDEO"] = "video";
    OutputFormat["OTHER"] = "other";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));
