import type * as Types from "./schema.types";

export type UpdateUserMutationVariables = Types.Exact<{
  input: Types.UpdateOneUserInput;
}>;

export type UpdateUserMutation = {
  updateOneUser: Pick<
    Types.User,
    "id" | "name" | "avatarUrl" | "email" | "phone" | "jobTitle"
  >;
};

export type QuoteFieldsFragment = Pick<
  Types.Quote,
  | "id"
  | "title"
  | "status"
  | "description"
  | "subTotal"
  | "total"
  | "tax"
  | "createdAt"
> & {
  items: Array<
    Pick<
      Types.QuoteItem,
      "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
    >
  >;
  company: Pick<
    Types.Company,
    "id" | "name" | "country" | "website" | "avatarUrl"
  >;
  salesOwner: Pick<Types.User, "id" | "name">;
  contact: Pick<Types.Contact, "id" | "name">;
};

export type QuotesCreateQuoteMutationVariables = Types.Exact<{
  input: Types.CreateOneQuoteInput;
}>;

export type QuotesCreateQuoteMutation = {
  createOneQuote: Pick<
    Types.Quote,
    | "id"
    | "title"
    | "status"
    | "description"
    | "subTotal"
    | "total"
    | "tax"
    | "createdAt"
  > & {
    items: Array<
      Pick<
        Types.QuoteItem,
        "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
      >
    >;
    company: Pick<
      Types.Company,
      "id" | "name" | "country" | "website" | "avatarUrl"
    >;
    salesOwner: Pick<Types.User, "id" | "name">;
    contact: Pick<Types.Contact, "id" | "name">;
  };
};

export type QuotesUpdateQuoteMutationVariables = Types.Exact<{
  input: Types.UpdateOneQuoteInput;
}>;

export type QuotesUpdateQuoteMutation = {
  updateOneQuote: Pick<
    Types.Quote,
    | "id"
    | "title"
    | "status"
    | "description"
    | "subTotal"
    | "total"
    | "tax"
    | "createdAt"
  > & {
    items: Array<
      Pick<
        Types.QuoteItem,
        "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
      >
    >;
    company: Pick<
      Types.Company,
      "id" | "name" | "country" | "website" | "avatarUrl"
    >;
    salesOwner: Pick<Types.User, "id" | "name">;
    contact: Pick<Types.Contact, "id" | "name">;
  };
};

export type RefreshTokenMutationVariables = Types.Exact<{
  refreshToken: Types.Scalars["String"]["input"];
}>;

export type RefreshTokenMutation = {
  refreshToken: Pick<Types.AuthResponse, "accessToken" | "refreshToken">;
};

export type EventFragmentFragment = Pick<
  Types.Event,
  | "id"
  | "title"
  | "description"
  | "startDate"
  | "endDate"
  | "color"
  | "createdAt"
> & {
  createdBy: Pick<Types.User, "id" | "name">;
  category: Pick<Types.EventCategory, "id" | "title">;
  participants: Array<Pick<Types.User, "id" | "name">>;
};

export type UpdateEventMutationVariables = Types.Exact<{
  input: Types.UpdateOneEventInput;
}>;

export type UpdateEventMutation = {
  updateOneEvent: Pick<
    Types.Event,
    | "id"
    | "title"
    | "description"
    | "startDate"
    | "endDate"
    | "color"
    | "createdAt"
  > & {
    createdBy: Pick<Types.User, "id" | "name">;
    category: Pick<Types.EventCategory, "id" | "title">;
    participants: Array<Pick<Types.User, "id" | "name">>;
  };
};

export type GetEventQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type GetEventQuery = {
  event: Pick<
    Types.Event,
    | "id"
    | "title"
    | "description"
    | "startDate"
    | "endDate"
    | "color"
    | "createdAt"
  > & {
    createdBy: Pick<Types.User, "id" | "name">;
    category: Pick<Types.EventCategory, "id" | "title">;
    participants: Array<Pick<Types.User, "id" | "name">>;
  };
};

export type AccountSettingsUpdateUserMutationVariables = Types.Exact<{
  input: Types.UpdateOneUserInput;
}>;

export type AccountSettingsUpdateUserMutation = {
  updateOneUser: Pick<
    Types.User,
    "id" | "name" | "email" | "avatarUrl" | "jobTitle" | "phone" | "timezone"
  >;
};

export type DashboardTotalCountsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type DashboardTotalCountsQuery = {
  companies: Pick<Types.CompanyConnection, "totalCount">;
  contacts: Pick<Types.ContactConnection, "totalCount">;
  deals: Pick<Types.DealConnection, "totalCount">;
};

export type EventCategoriesQueryVariables = Types.Exact<{
  filter: Types.EventCategoryFilter;
  sorting?: Types.InputMaybe<
    Array<Types.EventCategorySort> | Types.EventCategorySort
  >;
}>;

export type EventCategoriesQuery = {
  eventCategories: Pick<Types.EventCategoryConnection, "totalCount"> & {
    nodes: Array<Pick<Types.EventCategory, "id" | "title">>;
  };
};

export type QuotesTableQueryVariables = Types.Exact<{
  filter: Types.QuoteFilter;
  sorting: Array<Types.QuoteSort> | Types.QuoteSort;
  paging: Types.OffsetPaging;
}>;

export type QuotesTableQuery = {
  quotes: Pick<Types.QuoteConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Quote,
        | "id"
        | "title"
        | "status"
        | "description"
        | "subTotal"
        | "total"
        | "tax"
        | "createdAt"
      > & {
        items: Array<
          Pick<
            Types.QuoteItem,
            "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
          >
        >;
        company: Pick<
          Types.Company,
          "id" | "name" | "country" | "website" | "avatarUrl"
        >;
        salesOwner: Pick<Types.User, "id" | "name">;
        contact: Pick<Types.Contact, "id" | "name">;
      }
    >;
  };
};

export type QuotesGetQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type QuotesGetQuoteQuery = {
  quote: Pick<
    Types.Quote,
    | "id"
    | "title"
    | "status"
    | "description"
    | "subTotal"
    | "total"
    | "tax"
    | "createdAt"
  > & {
    items: Array<
      Pick<
        Types.QuoteItem,
        "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
      >
    >;
    company: Pick<
      Types.Company,
      "id" | "name" | "country" | "website" | "avatarUrl"
    >;
    salesOwner: Pick<Types.User, "id" | "name">;
    contact: Pick<Types.Contact, "id" | "name">;
  };
};

export type UsersSelectQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
  sorting?: Types.InputMaybe<Array<Types.UserSort> | Types.UserSort>;
  paging: Types.OffsetPaging;
}>;

export type UsersSelectQuery = {
  users: Pick<Types.UserConnection, "totalCount"> & {
    nodes: Array<Pick<Types.User, "id" | "name" | "avatarUrl">>;
  };
};

export type TaskStagesSelectQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging: Types.OffsetPaging;
}>;

export type TaskStagesSelectQuery = {
  taskStages: Pick<Types.TaskStageConnection, "totalCount"> & {
    nodes: Array<Pick<Types.TaskStage, "id" | "title">>;
  };
};

export type AccountSettingsGetUserQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type AccountSettingsGetUserQuery = {
  user: Pick<
    Types.User,
    "id" | "name" | "email" | "avatarUrl" | "jobTitle" | "phone" | "timezone"
  >;
};

export type DashboardCalendarUpcomingEventsQueryVariables = Types.Exact<{
  filter: Types.EventFilter;
  sorting?: Types.InputMaybe<Array<Types.EventSort> | Types.EventSort>;
  paging: Types.OffsetPaging;
}>;

export type DashboardCalendarUpcomingEventsQuery = {
  events: Pick<Types.EventConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Event, "id" | "title" | "color" | "startDate" | "endDate">
    >;
  };
};


export type DashboardDealsChartQueryVariables = Types.Exact<{
  filter: Types.DealStageFilter;
  sorting?: Types.InputMaybe<Array<Types.DealStageSort> | Types.DealStageSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;

export type DashboardDealsChartQuery = {
  dealStages: Pick<Types.DealStageConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.DealStage, "id" | "title"> & {
        dealsAggregate: Array<{
          groupBy?: Types.Maybe<
            Pick<
              Types.DealStageDealsAggregateGroupBy,
              "closeDateMonth" | "closeDateYear"
            >
          >;
          sum?: Types.Maybe<Pick<Types.DealStageDealsSumAggregate, "value">>;
        }>;
      }
    >;
  };
};




export type CompanyContactsTableQueryVariables = Types.Exact<{
  filter: Types.ContactFilter;
  sorting?: Types.InputMaybe<Array<Types.ContactSort> | Types.ContactSort>;
  paging: Types.OffsetPaging;
}>;

export type CompanyContactsTableQuery = {
  contacts: Pick<Types.ContactConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Contact,
        "id" | "name" | "avatarUrl" | "jobTitle" | "email" | "phone" | "status"
      >
    >;
  };
};

export type CompaniesListQueryVariables = Types.Exact<{
  filter: Types.CompanyFilter;
  sorting?: Types.InputMaybe<Array<Types.CompanySort> | Types.CompanySort>;
  paging: Types.OffsetPaging;
}>;
export type UpdateCompanyMutationVariables = Types.Exact<{
  input: Types.UpdateOneCompanyInput;
}>;
export type CompaniesListQuery = {
  companies: Pick<Types.CompanyConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Company, "id" | "name" | "avatarUrl"> & {
        dealsAggregate: Array<{
          sum?: Types.Maybe<Pick<Types.CompanyDealsSumAggregate, "value">>;
        }>;
      }
    >;
  };
};
export type UpdateCompanyMutation = {
  updateOneCompany: Pick<
    Types.Company,
    | "id"
    | "name"
    | "totalRevenue"
    | "industry"
    | "companySize"
    | "businessType"
    | "country"
    | "website"
    | "avatarUrl"
  > & { salesOwner: Pick<Types.User, "id" | "name" | "avatarUrl"> };
};


// sdflfkjsdklfjsdf

export type CreateCompanyMutationVariables = Types.Exact<{
  input: Types.CreateOneCompanyInput;
}>;

export type CreateCompanyMutation = {
  createOneCompany: Pick<Types.Company, "id"> & {
    salesOwner: Pick<Types.User, "id">;
  };
};


export type DashboardLatestActivitiesDealsQueryVariables = Types.Exact<{
  filter: Types.DealFilter;
  sorting?: Types.InputMaybe<Array<Types.DealSort> | Types.DealSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;

export type DashboardLatestActivitiesDealsQuery = {
  deals: Pick<Types.DealConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Deal, "id" | "title" | "createdAt"> & {
        stage?: Types.Maybe<Pick<Types.DealStage, "id" | "title">>;
        company: Pick<Types.Company, "id" | "name" | "avatarUrl">;
      }
    >;
  };
};

export type DashboardLatestActivitiesAuditsQueryVariables = Types.Exact<{
  filter: Types.AuditFilter;
  sorting?: Types.InputMaybe<Array<Types.AuditSort> | Types.AuditSort>;
  paging?: Types.InputMaybe<Types.OffsetPaging>;
}>;

export type DashboardLatestActivitiesAuditsQuery = {
  audits: Pick<Types.AuditConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Audit,
        "id" | "action" | "targetEntity" | "targetId" | "createdAt"
      > & {
        changes: Array<Pick<Types.AuditChange, "field" | "from" | "to">>;
        user?: Types.Maybe<Pick<Types.User, "id" | "name" | "avatarUrl">>;
      }
    >;
  };
};


export type CreateTaskMutationVariables = Types.Exact<{
  input: Types.CreateOneTaskInput;
}>;

export type CreateTaskMutation = {
  createOneTask: Pick<Types.Task, "id" | "title"> & {
    stage?: Types.Maybe<Pick<Types.TaskStage, "id" | "title">>;
  };
};

export type UpdateTaskMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskInput;
}>;

export type UpdateTaskMutation = {
  updateOneTask: Pick<
    Types.Task,
    "id" | "title" | "completed" | "description" | "dueDate"
  > & {
    stage?: Types.Maybe<Pick<Types.TaskStage, "id" | "title">>;
    users: Array<Pick<Types.User, "id" | "name" | "avatarUrl">>;
    checklist: Array<Pick<Types.CheckListItem, "title" | "checked">>;
  };
};

export type TaskStagesQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging: Types.OffsetPaging;
}>;

export type TaskStagesQuery = {
  taskStages: Pick<Types.TaskStageConnection, "totalCount"> & {
    nodes: Array<Pick<Types.TaskStage, "id" | "title">>;
  };
};

export type TasksQueryVariables = Types.Exact<{
  filter: Types.TaskFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskSort> | Types.TaskSort>;
  paging: Types.OffsetPaging;
}>;

export type TasksQuery = {
  tasks: Pick<Types.TaskConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Task,
        | "id"
        | "title"
        | "description"
        | "dueDate"
        | "completed"
        | "stageId"
        | "createdAt"
        | "updatedAt"
      > & { users: Array<Pick<Types.User, "id" | "name" | "avatarUrl">> }
    >;
  };
};

export type UpdateTaskStageMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskInput;
}>;

export type UpdateTaskStageMutation = { updateOneTask: Pick<Types.Task, "id"> };