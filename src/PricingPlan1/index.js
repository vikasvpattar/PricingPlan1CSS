import React from 'react';
import { inlineStyles } from './style.js';
import Typography from '../Elements/Typography';
import Image from '../Elements/Image';
import Button from '../Elements/Button';
import CardHeader from '../Elements/CardHeader';
import RowContainer from '../Elements/RowContainer';
import Label from '../Elements/Label';
import Container from '../Elements/Container';
import Select from '../Elements/Select';
import ColumnContainer from '../Elements/ColumnContainer';
import CardBody from '../Elements/CardBody';
import Card from '../Elements/Card';
export default function PricingPlan1() {
  return (
    <Card style={{ ...inlineStyles.Card_8264 }}>
      <CardHeader style={{ ...inlineStyles.CardHeader_4C86 }}>
        <Typography
          style={{ ...inlineStyles.Typography_F0E8 }}
          variant="h3">
          Refill prepaid account
        </Typography>
        <Button
          variant="button-with-typo"
          style={{ ...inlineStyles.Button_084D }}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyOXB0IiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgd2lkdGg9IjMyOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOTQuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiLz48L3N2Zz4="
            style={{ ...inlineStyles.Icon_E101 }}
            size="25px"
            radius="4px"></Image>
        </Button>
      </CardHeader>
      <CardBody style={{ ...inlineStyles.CardBody_11D9 }}>
        <RowContainer style={{ ...inlineStyles.RowContainer_8FD9 }} gap="0px">
          <Typography
            style={{ ...inlineStyles.Typography_CB81 }}
            variant="subtitle">
            Balance
          </Typography>
          <Typography
            style={{ ...inlineStyles.Typography_F9DC }}
            variant="subtitle">
            $0.50
          </Typography>
        </RowContainer>
        <ColumnContainer
          style={{ ...inlineStyles.ColumnContainer_BE79, gap:"0.2rem" }}
          gap="0.2rem">
          <RowContainer style={{ ...inlineStyles.RowContainer_63ED, gap:"3px" }} gap="3px">
            <Label
              style={{ ...inlineStyles.Label_1099 }}
              name="label"
              htmlFor="country">
              Country
            </Label>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxjaXJjbGUgcj0iMTIiIGN4PSIxMiIgY3k9IjEyIiBmaWxsPSIjMzYzNjM2IiBzaGFwZT0iY2lyY2xlIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjczLDAsMCwwLjczLDMuMjQsMy4yNCkiPjwvY2lyY2xlPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcsNC4yODYyNjM3OTcwMTU3MzVlLTE2LC00LjI4NjI2Mzc5NzAxNTczNWUtMTYsLTAuNywyMC40MDAwMDAwMDAwMDAwMDIsMjAuNCkiPjxwYXRoIGQ9Ik0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDB6bTAgMTkuNjZjLS45MzggMC0xLjU4LS43MjMtMS41OC0xLjY2IDAtLjk2NC42NjktMS42NiAxLjU4LTEuNjYuOTYzIDAgMS41OC42OTYgMS41OCAxLjY2IDAgLjkzOC0uNjE3IDEuNjYtMS41OCAxLjY2em0uNjIyLTYuMzM5Yy0uMjM5LjgxNS0uOTkyLjgyOS0xLjI0MyAwLS4yODktLjk1Ni0xLjMxNi00LjU4NS0xLjMxNi02Ljk0MiAwLTMuMTEgMy44OTEtMy4xMjUgMy44OTEgMC0uMDAxIDIuMzcxLTEuMDgzIDYuMDk0LTEuMzMyIDYuOTQyeiIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAzMDEwNCIgb3BhY2l0eT0iMSIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              size="15px"
              radius="0" style={{width:"15px"}}></Image>
          </RowContainer>
          <Select style={{ ...inlineStyles.Select_75EE }}>
            <option value={"usa"}>USA</option>
            <option value={"india"}>India</option>
            <option value={"uk"}>UK</option>
            <option value={"australia"}>Australia</option>
          </Select>
        </ColumnContainer>
        <ColumnContainer
          style={{ ...inlineStyles.ColumnContainer_ACA2,gap:"0.2rem" }}
          gap="0.2rem">
          <Label
            style={{ ...inlineStyles.Label_AD87 }}
            name="label"
            htmlFor="refil_amount">
            Refill amount
          </Label>
          <Select style={{ ...inlineStyles.Select_8C22 }}>
            <option value={15.86}>$ 15.86</option>
            <option value={5.86}>$ 5.86</option>
            <option value={7.32}>$ 7.32</option>
            <option value={8.22}>$ 8.22</option>
          </Select>
        </ColumnContainer>
        <ColumnContainer
          style={{ ...inlineStyles.ColumnContainer_5A65,gap:"0.3rem" }}
          span="12.0"
          gap="0.3rem">
          <Label
            style={{ ...inlineStyles.Label_AC47 }}
            name="label"
            htmlFor="label">
            Payment method
          </Label>
          <Button variant="button" style={{ ...inlineStyles.Button_28D3 }}>
            Add Payment Method
          </Button>
        </ColumnContainer>
        <Button variant="button" style={{ ...inlineStyles.Button_D36D, color:"white" }}>
          Refill
        </Button>
      </CardBody>
    </Card>
  );
}
