import gql from "graphql-tag";

export const DASHBOARD_TOTAL_COUNTS_QUERY = gql`
    query DashboardTotalCounts {
        companies {
            totalCount
        }
        contacts {
            totalCount
        }
        deals {
            totalCount
        }
    }
`;

export const EVENT_CATEGORIES_QUERY = gql`
    query EventCategories(
        $filter: EventCategoryFilter!
        $sorting: [EventCategorySort!]
    ) {
        eventCategories(filter: $filter, sorting: $sorting) {
            totalCount
            nodes {
                id
                title
            }
        }
    }
`;

const QUOTE_FRAGMENT = gql`
    fragment QuoteFields on Quote {
        id
        title
        status
        description
        subTotal
        total
        tax
        createdAt
        items {
            title
            unitPrice
            quantity
            discount
            totalPrice
        }
        company {
            id
            name
            country
            website
            avatarUrl
        }
        salesOwner {
            id
            name
        }
        contact {
            id
            name
        }
    }
`;

// export const QUOTES_TABLE_QUERY = gql`
//     query QuotesTable(
//         $filter: QuoteFilter!
//         $sorting: [QuoteSort!]!
//         $paging: OffsetPaging!
//     ) {
//         quotes(filter: $filter, sorting: $sorting, paging: $paging) {
//             nodes {
//                 ...QuoteFields
//             }
//             totalCount
//         }
//     }
//     ${QUOTE_FRAGMENT}
// `;

// export const QUOTES_GET_QUOTE_QUERY = gql`
//     query QuotesGetQuote($id: ID!) {
//         quote(id: $id) {
//             ...QuoteFields
//         }
//     }
//     ${QUOTE_FRAGMENT}
// `;

export const USERS_SELECT_QUERY = gql`
  query UsersSelect(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount 
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;


export const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      totalRevenue
      industry
      companySize
      businessType
      country
      website
      avatarUrl
      salesOwner {
        id
        name
        avatarUrl
      }
    }
  }
`;


export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

export const ACCOUNT_SETTINGS_GET_USER_QUERY = gql`
    query AccountSettingsGetUser($id: ID!) {
        user(id: $id) {
            id
            name
            email
            avatarUrl
            jobTitle
            phone
            timezone
        }
    }
`;




// Query to get upcoming events
export const DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY = gql`
  query DashboardCalendarUpcomingEvents(
    $filter: EventFilter!
    $sorting: [EventSort!]
    $paging: OffsetPaging!
  ) {
    events(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        color
        startDate
        endDate
      }
    }
  }
`;

// Query to get deals chart
export const DASHBOARD_DEALS_CHART_QUERY = gql`
  query DashboardDealsChart(
    $filter: DealStageFilter!
    $sorting: [DealStageSort!]
    $paging: OffsetPaging
  ) {
    dealStages(filter: $filter, sorting: $sorting, paging: $paging) {
      # Get all deal stages
      nodes {
        id
        title
        # Get the sum of all deals in this stage and group by closeDateMonth and closeDateYear
        dealsAggregate {
          groupBy {
            closeDateMonth
            closeDateYear
          }
          sum {
            value
          }
        }
      }
      # Get the total count of all deals in this stage
      totalCount
    }
  }
`;

// Query to get latest activities deals
export const DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY = gql`
  query DashboardLatestActivitiesDeals(
    $filter: DealFilter!
    $sorting: [DealSort!]
    $paging: OffsetPaging
  ) {
    deals(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        stage {
          id
          title
        }
        company {
          id
          name
          avatarUrl
        }
        createdAt
      }
    }
  }
`;

// Query to get latest activities audits
export const DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY = gql`
  query DashboardLatestActivitiesAudits(
    $filter: AuditFilter!
    $sorting: [AuditSort!]
    $paging: OffsetPaging
  ) {
    audits(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        action
        targetEntity
        targetId
        changes {
          field
          from
          to
        }
        createdAt
        user {
          id
          name
          avatarUrl
        }
      }
    }
  }
`;

// Query to get companies list
export const COMPANIES_LIST_QUERY = gql`
  query CompaniesList(
    $filter: CompanyFilter!
    $sorting: [CompanySort!]
    $paging: OffsetPaging!
  ) {
    companies(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        # Get the sum of all deals in this company
        dealsAggregate {
          sum {
            value
          }
        }
      }
    }
  }
`;


// Query to get contacts associated with a company
export const COMPANY_CONTACTS_TABLE_QUERY = gql`
  query CompanyContactsTable(
    $filter: ContactFilter!
    $sorting: [ContactSort!]
    $paging: OffsetPaging!
  ) {
    contacts(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        jobTitle
        email
        phone
        status
      }
    }
  }
`;

// Query to get task stages list
export const TASK_STAGES_QUERY = gql`
  query TaskStages(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount # Get the total count of task stages
      nodes {
        id
        title
      }
    }
  }
`;

// Query to get tasks list
export const TASKS_QUERY = gql`
  query Tasks(
    $filter: TaskFilter!
    $sorting: [TaskSort!]
    $paging: OffsetPaging!
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount # Get the total count of tasks
      nodes {
        id
        title
        description
        dueDate
        completed
        stageId
        # Get user details associated with this task
        users {
          id
          name
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  }
`;
