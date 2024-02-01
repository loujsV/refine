import { Col, Form, Input, InputNumber, Row, Select } from "antd"
import { Edit, useForm, useSelect } from "@refinedev/antd"
import { UPDATE_COMPANY_MUTATION } from "@/graphql/mutations"
import CustomAvatar from "@/components/custom-avatar"
import { getNameInitials } from "@/utilities"
import { GetFields, GetFieldsFromList, GetVariables } from "@refinedev/nestjs-query"
import { UpdateCompanyMutation, UpdateCompanyMutationVariables, UsersSelectQuery } from "@/graphql/types"
import { USERS_SELECT_QUERY } from "@/graphql/queries"
import SelectOptionWithAvatar from "@/components/select-option-with-avatar"
import { businessTypeOptions, companySizeOptions, industryOptions } from "@/constants"
import { CompanyContactsTable } from "./contacts-table"
import { HttpError } from "@refinedev/core"


const EditPage = () => {
  const { saveButtonProps, formProps, formLoading, queryResult } = useForm<
  GetFields<UpdateCompanyMutation>,
  HttpError,
  GetVariables<UpdateCompanyMutationVariables>
>({
    redirect: false,
    meta: {
      gqlMutation: UPDATE_COMPANY_MUTATION
    }
  })

  const { avatarUrl, name } = queryResult?.data?.data || {}

  const {selectProps, queryResult: queryResultUsers} = useSelect<GetFieldsFromList<UsersSelectQuery>>({
    resource: 'users',
    optionLabel: 'name',
    pagination: {
      mode: 'off'
    },
    meta: {
        gqlQuery: USERS_SELECT_QUERY
    }
  })

  //   // Custom formatter function
  // const formatCurrency = (value: string): string => {
  //   // Use Intl.NumberFormat to format the number
  //   return new Intl.NumberFormat('en-US', {
  //     // style: 'currency',
  //     // currency: 'USD',
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 10,
  //   }).format(parseFloat(value));
  // };

  // // Custom parser function
  // const parseCurrency = (value: string): number => {
  //   // Remove currency symbol and commas, then parse as a float
  //   const parsedValue = parseFloat(value.replace(/[^\d.]/g, ''));
  //   return isNaN(parsedValue) ? 0 : parsedValue;
  // };

  return (
    <div>
      <Row gutter={[32,32]}>
        <Col xs={24} xl={12}>
          <Edit
            isLoading={formLoading}
            saveButtonProps={saveButtonProps}
            breadcrumb={false}
          >
            <Form {...formProps} layout="vertical">
              <CustomAvatar shape="square" src={avatarUrl} name={getNameInitials(name||'')} style={{width:96, height: 96, marginBottom: '24px'}}/>
              <Form.Item
                    label= "Sale Owner"
                    name="salesOwnerId"
                    initialValue={formProps?.initialValues?.salesOwner?.id}
                >
                    <Select
                        placeholder= "Please select a sales owner"
                        {...selectProps}
                        options={
                          queryResultUsers.data?.data.map((user) => ({
                                value: user.id,
                                label: (
                                    <SelectOptionWithAvatar 
                                        name={user.name}
                                        avatarUrl={user.avatarUrl ?? undefined}
                                    />
                                )
                            })) ?? []
                        }   
                    />
             </Form.Item>
             <Form.Item name="companySize">
                  <Select options={companySizeOptions} placeholder='Company Size'/>      
              </Form.Item>   
              <Form.Item label='Total Revenue' name="totalRevenue">
                  <InputNumber 
                    autoFocus
                    addonBefore='$'
                    min={0}
                    placeholder="0.00"
                  />     
              </Form.Item>  
              <Form.Item label="Industry" name="industry">
                  <Select options={industryOptions} />      
              </Form.Item>          
              <Form.Item label="Business Type" name="businessType">
                  <Select options={businessTypeOptions} />      
              </Form.Item>          
              <Form.Item label="Country" name="country">
                  <Input placeholder="Country" />      
              </Form.Item>          
              <Form.Item label="Website" name="website">
                  <Input placeholder="www.your-website.xyz" />      
              </Form.Item>         
            </Form>
          </Edit>
        </Col>

        <Col xs={24} xl={12}>
          <CompanyContactsTable />
        </Col>

      </Row>
    </div>
  )
}

export default EditPage